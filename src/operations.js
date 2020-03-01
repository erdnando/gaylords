import Api from '../src/api'

export default {
    getWord (params) {
        return Api().get('/wordwise/entries?limit=1&headword=');
    },
    login(params){
        try{
            return Api().post("/admin/find", {
                  email: params.correo,
                  password: params.contrasenia,
              });
        }
        catch(error){
            //debugger;
            console.log(error);
        } 
    },
}