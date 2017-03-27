const axios = require('axios');
const qs = require('qs');


class AxiosFacade {
    constructor(url, config, middleware) {
        var noUrlArg = typeof url === "object";
        this.url = noUrlArg ? '' : url;
        this.config = noUrlArg ?
            url : config?
            config : {};
        this.middleware = middleware;
    }
    //wrap fire method with middleware
    static wrap(middleware) {
        return  (url, config)=>new AxiosFacade(url,config, middleware).useMiddleware().get();
    }

    useMiddleware(){
        //use middleware to transform url config
        this.middleware.forEach((args, funcName)=> {
            funcName.call(this,args)
        }, this);
        return this;
    }

    get(){
        return this.url? axios(this.url, this.config) : axios( this.config );
    }
}

//middleware
function addPreUrl(preUrl){
    if (this.url) this.url = preUrl + this.url;
    if (this.config && this.config.url) this.config.url = preUrl + this.config.url;
}

function addParams(defaultParams){
    if ( this.config && this.config.params ){
        this.config.params = Object.assign({}, defaultParams, this.config.params );
    } else {
        this.config.params= defaultParams;
    }
}

function redefineGet(newGet){
    this.get = newGet.bind(this)
}


// here makes default settings for request
module.exports = {
    api: AxiosFacade.wrap()
};


