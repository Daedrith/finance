export let localStringToDate = (s) =>
{
  // s is an ISO date string without timezone offset (Z or number)
  let offsetMinutes = -new Date(s).getTimezoneOffset();
  let offsetSign = offsetMinutes < 0 ? "-" : "+";
  let offsetHours = ('0' + Math.abs(offsetMinutes) / 60).slice(-2);
  offsetMinutes = ('0' + Math.abs(offsetMinutes) % 60).slice(-2);
  return new Date(s + `${offsetSign}${offsetHours}:${offsetMinutes}`);
};
