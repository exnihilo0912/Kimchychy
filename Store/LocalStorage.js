const storage = process.browser ? window.localStorage : null;

function initStorage(name) {
    return storage && (storage.getItem(name) ? JSON.parse(storage.getItem(name)) : null) || null;
}

function updateStorage(name, data) {
    storage.setItem(name, JSON.stringify(data));
}

function emptyStorage(name) {
    storage.removeItem(name);
}

export { initStorage, updateStorage, emptyStorage };