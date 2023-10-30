if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
        .then(function(registration) {
            console.log('Service Worker zarejestrowany z sukcesem:', registration);
        })
        .catch(function(error) {
            console.log('Błąd podczas rejestracji Service Workera:', error);
        });
}
