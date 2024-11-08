import arabic from './src/arabic.json';
import german from './src/german.json';
import english from './src/english.json';
import turkish from './src/turkish.json';
import kurdishSoran from './src/kurdish-soran.json';
import kurdishLatin from './src/kurdish-badin.json';

export const language = {
        ENGLISH: 'english',
        ARABIC: 'arabic',
        GERMAN: 'german',
        TURKISH: 'turkish',
        KURDISH_SORAN: 'kurdish_soran',
        KURDISH_BADIN: 'kurdish_badin',
};

function translate(sentence) {
        return function (language) {
                switch (language) {
                        case 'english':
                                return english[sentence] || sentence;
                        case 'arabic':
                                return arabic[sentence] || sentence;
                        case 'german':
                                return german[sentence] || sentence;
                        case 'turkish':
                                return turkish[sentence] || sentence;
                        case 'kurdish_soran':
                                return kurdishSoran[sentence] || sentence;
                        case 'kurdish_latin':
                                return kurdishLatin[sentence] || sentence;
                        default:
                                return sentence;
                }
        };
}

export const sentences = english;
export default translate;
export { arabic, english, german, kurdishSoran, kurdishLatin };
