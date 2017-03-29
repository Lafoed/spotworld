
export function userGeolocation(){
    return new Promise((resolve,reject)=>{
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(resolve);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    })
}