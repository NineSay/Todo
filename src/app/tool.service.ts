export class ToolService {
  private static instance: ToolService;
  private constructor() {
    // do something construct...
  }
  static getInstance() {
    if (!ToolService.instance) {
      ToolService.instance = new ToolService();
      // ... any one time initialization goes here ...
    }
    return ToolService.instance;
  }

  UUID(len?: number, radix?: number) {
    len = len || 16;
    radix = radix || 16
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = [], i;
    radix = radix || chars.length;

    if (len) {
      // Compact form
      for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
    } else {
      // rfc4122, version 4 form
      var r;

      // rfc4122 requires these characters
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
      uuid[14] = '4';

      // Fill in random data.  At i==19 set the high bits of clock sequence as
      // per rfc4122, sec. 4.1.5
      for (i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random() * 16;
          uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
        }
      }
    }

    return uuid.join('');
  }

  RandomInterval(start, end){
    return Math.floor(Math.random() * (end - start) + start);
  }

  NumberToHex(value){
    function toHex(n) {
      n = n.toString(16) + '';
      return n.length >= 2 ? n : new Array(2 - n.length + 1).join('0') + n;
    }

    var r = toHex(value % 256),
      g = toHex(Math.floor( value / 256 ) % 256),
      b = toHex(Math.floor( Math.floor(value / 256) / 256 ) % 256);
    var hex =  (r + g + b).toUpperCase();
    return hex;
  }

  HexToNumber(value){
    return parseInt(value, 10);
  }
}
