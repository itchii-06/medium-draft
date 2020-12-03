import { Inline } from './constants';

/*
Custom style map for custom entities like Hihglight.
*/
const customStyleMap = {
  [Inline.HIGHLIGHT]: {
    backgroundColor: 'yellow',
  },
  [Inline.CODE]: {
    fontFamily: 'SFMono-Regular,Consolas,Menlo,Courier,monospace',
    margin: '36px 0',
    fontSize: '12px',
    lineHeight: '18px',
    padding: '36px',
    whiteSpace: 'pre-wrap',
    color: '#fff',
    backgroundColor: '#282c34',
    display: 'block',
  },
};

export default customStyleMap;
