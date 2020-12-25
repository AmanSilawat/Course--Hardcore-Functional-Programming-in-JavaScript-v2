const old_date = new Date('2020-12-25T13:46:28.184Z');
const current_date = new Date();

function diff_date(current_date, old_date) {
    const hourse = Math.abs(current_date.getHours() - old_date.getHours());
    const minutes = Math.abs(current_date.getMinutes() - old_date.getMinutes());
    return { hourse, minutes };
}
const diff_date_val = diff_date(current_date, old_date);
console.log(diff_date_val);