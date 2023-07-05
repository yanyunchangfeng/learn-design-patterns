import path from 'path';

const unZip = (src: string) => {};
const unRar = (src: string) => {};
const un7z = (src: string) => {};

const open = (src: string) => {
  const ext = path.extname(src);
  switch (ext) {
    case '.gz':
      unZip(src);
      break;
    case '.rar':
      unRar(src);
      break;
    case '.7z':
      un7z(src);
      break;
    default:
      break;
  }
};
open(path.resolve('./xxx.7z'));
export {};
