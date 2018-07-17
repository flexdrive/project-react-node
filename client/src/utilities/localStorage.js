function verifyLocalStorageAvailability() {
    try {
        const storage = window.localStorage;
        if (!(!!storage))
            return false;

        const testEntry = '_storage_enabled_';
        storage.setItem(testEntry, testEntry);

        if (localStorage.getItem(testEntry) === testEntry){
            storage.removeItem(testEntry);
            return true;
        } else {
            return false;
        }

    } catch(e) {
        return false;
    }
}

const localStorage = {

    storage: window.localStorage || null,

    isStorageAvailable: verifyLocalStorageAvailability(),

    store(key, value, storeAsJson = false) {
        if(this.isStorageAvailable){
            const valueToStore = (storeAsJson) ? JSON.stringify(value) : value;
            this.storage.setItem(key, valueToStore);
        }
    },

    get(key, parseJson = false){
        if(this.isStorageAvailable)
            return (parseJson) ?
                JSON.parse(this.storage.getItem(key)) :
                this.storage.getItem(key);

        return false;
    },

    remove(key){
        if(this.isStorageAvailable)
            return this.storage.removeItem(key);
    }
}

export default localStorage;