/**
 * Returns if a specific http code is in a given code range
 * where the code range is defined as a combination of digits
 * and "X" (the letter X) with a length of 3
 *
 * @param codeRange string with length 3 consisting of digits and "X" (the letter X)
 * @param code the http status code to be checked against the code range
 */
export function isCodeInRange(codeRange: string, code: number): boolean {
    // This is how the default value is encoded in OAG
    if (codeRange === "0") {
        return true;
    }
    if (codeRange == code.toString()) {
        return true;
    } else {
        const codeString = code.toString();
        if (codeString.length != codeRange.length) {
            return false;
        }
        for (let i = 0; i < codeString.length; i++) {
            if (codeRange.charAt(i) != "X" && codeRange.charAt(i) != codeString.charAt(i)) {
                return false;
            }
        }
        return true;
    }
}

/**
* Returns if it can consume form
*
* @param consumes array
*/
export function canConsumeForm(contentTypes: string[]): boolean {
    return contentTypes.indexOf('multipart/form-data') !== -1
}

export class UnparsedObject {
  _data:any;
  constructor(data:any) {
    this._data = data;
  }
}

export type AttributeTypeMap = {
  [key: string]: {
    baseName: string;
    type: string;
    required?: boolean;
    format?: string;
  };
}

export const isNode: boolean = typeof process !== "undefined" && process.release && process.release.name === 'node';

export class DDate extends Date {
  rfc3339TzOffset: string | undefined;
}

const RFC3339Re: RegExp = /^(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})\.?(\d+)?(?:(?:([+-]\d{2}):?(\d{2}))|Z)?$/;
export function dateFromRFC3339String(date: string): DDate {
  const m = RFC3339Re.exec(date);
  if (m) {
    const _date = new DDate(date)
    if( m[8] === undefined && m[9] === undefined){
      _date.rfc3339TzOffset = 'Z'
    } else {
      _date.rfc3339TzOffset = `${m[8]}:${m[9]}`
    }

    return _date
  } else {
    throw new Error('unexpected date format: ' + date)
  }
}

export function dateToRFC3339String(date: Date | DDate): string {
  const offSetArr = getRFC3339TimezoneOffset(date).split(":")
  const tzHour = offSetArr.length == 1 ? 0 : +offSetArr[0];
  const tzMin  = offSetArr.length == 1 ? 0 : +offSetArr[1];

  const year = date.getFullYear() ;
  const month = date.getMonth();
  const day = date.getUTCDate();
  const hour = date.getUTCHours() + +tzHour;
  const minute = date.getUTCMinutes() + +tzMin;
  const second = date.getUTCSeconds();

  let msec = date.getUTCMilliseconds().toString();
  msec = +msec === 0 ? "" : `.${pad(+msec, 3)}`

  return year + "-" +
    pad(month + 1) + "-" +
    pad(day) + "T" +
    pad(hour) + ":" +
    pad(minute) + ":" +
    pad(second) +
    msec +
    offSetArr.join(":");
}

// Helpers
function pad(num: number, len: number = 2): string {
  let paddedNum = num.toString()
  if (paddedNum.length < len) {
    paddedNum = "0".repeat(len - paddedNum.length) + paddedNum
  } else if (paddedNum.length > len) {
    paddedNum = paddedNum.slice(0, len)
  }

  return paddedNum
}

function getRFC3339TimezoneOffset(date: Date | DDate): string {
  if (date instanceof DDate && date.rfc3339TzOffset) {
    return date.rfc3339TzOffset;
  }

  let offset = date.getTimezoneOffset()
  if (offset === 0) {
      return "Z";
  }

  const offsetSign = (offset > 0) ? "+" : "-";
  offset = Math.abs(offset);
  return offsetSign + pad(Math.floor(offset / 60)) + ":" + pad(offset % 60);
}
