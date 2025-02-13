import { Console } from '../../components/Console.tsx';

const text = `* XHUNTER Framework Ver 1.0ㅤㅤㅤ
* Advanced Analysis Systemㅤ
* Response Protocol Active              
* XHUNTER Research Division                
*****************************

Usage: xhunter [options]
-s: social links (shows all social platforms)
    ⤷ displays all available community links
-x: x/twitter profile
    ⤷ follow announcements

[SYSTEM] Analyzing input pattern...
[STATUS] Command indexed.
root@xhunter: ~#:`;

const infText = `
root@xhunter: ~#:`;

export default () => {
  return (
    <Console
      bigTopGap
      canInput
      className="rounded-xl border-2 border-[#0D99FF] bg-[#0D99FF]/25"
      text={text}
      infText={infText}
    />
  );
};
