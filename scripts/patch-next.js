const fs = require('fs');
const path = require('path');

function patchAppPageFile(filePath) {
  if (!fs.existsSync(filePath)) return false;
  let content = fs.readFileSync(filePath, 'utf8');

  const targetPattern = /if\s*\(\s*page\s*===\s*_entryconstants\.UNDERSCORE_GLOBAL_ERROR_ROUTE_ENTRY\s*\)\s*\{[\s\S]*?pathname\s*=\s*'\/500';[\s\S]*?\}/;
  
  const replacement = `if (page === _entryconstants.UNDERSCORE_GLOBAL_ERROR_ROUTE_ENTRY) {
        return {
            metadata: {},
            hasEmptyStaticShell: false,
            hasPostponed: false,
            hasPendingUi: false,
            htmlSize: 0,
            hasStaticRsc: false,
            cacheControl: { revalidate: false, expire: undefined }
        };
    }`;

  if (targetPattern.test(content)) {
    content = content.replace(targetPattern, replacement);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`[patch-next] Successfully patched app-page: ${filePath}`);
    return true;
  }
  return false;
}

function patchParamsFile(filePath) {
  if (!fs.existsSync(filePath)) return false;
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  const p1 = /throw Object\.defineProperty\(new (?:_invarianterror\.)?InvariantError\('Expected workStore to be initialized'\),[\s\S]*?configurable:\s*true\s*\}\);/g;
  if (p1.test(content)) {
    content = content.replace(p1, 'return Promise.resolve(underlyingParams);');
    changed = true;
  }

  const p2 = /throw Object\.defineProperty\(new (?:_invarianterror\.)?InvariantError\('Missing workStore in createPrerenderParamsForClientSegment'\),[\s\S]*?configurable:\s*true\s*\}\);/g;
  if (p2.test(content)) {
    content = content.replace(p2, 'return Promise.resolve(underlyingParams);');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`[patch-next] Successfully patched params: ${filePath}`);
    return true;
  }
  return false;
}

function patchPathnameFile(filePath) {
  if (!fs.existsSync(filePath)) return false;
  let content = fs.readFileSync(filePath, 'utf8');
  const p = /throw Object\.defineProperty\(new (?:_invarianterror\.)?InvariantError\('Expected workStore to be initialized'\),[\s\S]*?configurable:\s*true\s*\}\);/g;
  if (p.test(content)) {
    content = content.replace(p, 'return Promise.resolve(underlyingPathname);');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`[patch-next] Successfully patched pathname: ${filePath}`);
    return true;
  }
  return false;
}

function patchSearchParamsFile(filePath) {
  if (!fs.existsSync(filePath)) return false;
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  const p1 = /(function\s+(?:createSearchParamsFromClient|createServerSearchParamsForServerPage)\s*\([^)]*\)\s*\{[\s\S]*?)throw Object\.defineProperty\(new (?:_invarianterror\.)?InvariantError\('Expected workStore to be initialized'\),[\s\S]*?configurable:\s*true\s*\}\);/g;
  if (p1.test(content)) {
    content = content.replace(p1, '$1return Promise.resolve(underlyingSearchParams);');
    changed = true;
  }

  const p2 = /(function\s+(?:createPrerenderSearchParamsForClientPage|makeErroringSearchParamsForUseCache)\s*\([^)]*\)\s*\{[\s\S]*?)throw Object\.defineProperty\(new (?:_invarianterror\.)?InvariantError\('Expected workStore to be initialized'\),[\s\S]*?configurable:\s*true\s*\}\);/g;
  if (p2.test(content)) {
    content = content.replace(p2, '$1return Promise.resolve({});');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`[patch-next] Successfully patched search-params: ${filePath}`);
    return true;
  }
  return false;
}

function patchResolveMetadataFile(filePath) {
  if (!fs.existsSync(filePath)) return false;
  let content = fs.readFileSync(filePath, 'utf8');
  const p = /throw Object\.defineProperty\(new (?:_invarianterror\.)?InvariantError\('Expected workStore to be initialized'\),[\s\S]*?configurable:\s*true\s*\}\);/g;
  if (p.test(content)) {
    content = content.replace(p, 'return accumulateMetadata(pathname || "", metadataItems, pathname, metadataContext);');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`[patch-next] Successfully patched resolve-metadata: ${filePath}`);
    return true;
  }
  return false;
}

function walkAndPatch(dir) {
  if (!fs.existsSync(dir)) return;
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'routes' && fs.existsSync(path.join(fullPath, 'app-page.js'))) {
        patchAppPageFile(path.join(fullPath, 'app-page.js'));
      }
      walkAndPatch(fullPath);
    } else if (entry.isFile()) {
      if (entry.name === 'params.js') {
        patchParamsFile(fullPath);
      } else if (entry.name === 'pathname.js') {
        patchPathnameFile(fullPath);
      } else if (entry.name === 'search-params.js') {
        patchSearchParamsFile(fullPath);
      } else if (entry.name === 'resolve-metadata.js') {
        patchResolveMetadataFile(fullPath);
      }
    }
  }
}

console.log('[patch-next] Applying static export patches to Next.js modules...');

const nextDist = path.join(__dirname, '..', 'node_modules', 'next', 'dist');
if (fs.existsSync(nextDist)) {
  walkAndPatch(nextDist);
}

console.log('[patch-next] Patch check completed.');
