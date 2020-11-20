const xRegExp = require('xregexp');

module.exports.decamelize = (text, separator = '-') => {
    if (!(typeof text === 'string' && typeof separator === 'string')) {
        throw new TypeError('The `text` and `separator` arguments should be of type `string`');
    }

    const regex1 = xRegExp('([\\p{Ll}\\d])(\\p{Lu})', 'g');
    const regex2 = xRegExp('(\\p{Lu}+)(\\p{Lu}[\\p{Ll}\\d]+)', 'g');

    return text
        .replace(regex1, `$1${separator}$2`)
        .replace(regex2, `$1${separator}$2`)
        .toLowerCase();
};
