export default{
 /**
 * 取得日期格式
 * @constructor
 * @param {Date} datetime - 待轉換格式的日期
 * @param {string} separate - 分隔符號，介於年月日之間自訂義分隔符號
 * @returns yyyy/mm/dd hh:MM (/為分隔符號可以自訂義)
 */
  getFormatDateTime(datetime, separate){
    let year = datetime.getFullYear().toString();
    let month = (datetime.getMonth() + 1).toString();
    let date = datetime.getDate().toString();
    let hour = datetime.getHours().toString();
    let minute = datetime.getMinutes().toString();

    month = month.length == 2 ? month : "0" + month;
    date = date.length == 2 ? date : "0" + date;
    hour = hour.length == 2 ? hour : "0" + hour;
    minute = minute.length == 2 ? minute : "0" + minute;

    return year + separate + month + separate + date + ' ' + hour + ':' + minute;
  }
}

