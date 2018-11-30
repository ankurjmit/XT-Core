function checkInCache() {
    let cache = new Map();
    return function(x) {
        return cache.get(x) ? `Data already available in cache :  ${cache.get(x)} ` : `Data not available in cache :  ${setCache(x)} `;
    }
    function setCache(x) {
        cache.set(x, x);
        return x;
    }
}
getX = checkInCache()