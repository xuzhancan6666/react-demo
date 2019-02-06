import jsonp from 'jsonp';

export default class webAPI {
   static jsonp(opt) {
       new Promise((resolve, reject) => {
          jsonp(opt.url, {
             param: 'callback'
          }, (err, param) => {
            //todo
          });
       });
   }
}