import moment from 'moment';

export function isEmpty(data) {
   if(data === 0 || data === '0') {
      return false;
   }

   if(!data) {
      return true;
   }

   if(typeof (data) == 'string') {
      return data.replace(/(^\s*)|(\s*$)/g, '').length == 0;
   }

   if(data instanceof Array) {
      return data.length == 0;
   }

   if(data instanceof Object) {
      return Object.keys(data).length == 0;
   }

   return false;
}

export function dateFormatter(date, formate) {
   return date ? moment(date).format(formate) : null;
}