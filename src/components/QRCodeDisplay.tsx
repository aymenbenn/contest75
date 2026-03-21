import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
interface QRCodeDisplayProps {
  url: string;
  label?: string;
}
export function QRCodeDisplay({
  url,
  label = 'Scan to continue on your phone'
}: QRCodeDisplayProps) {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-border shadow-sm">
      <div className="bg-white p-2 rounded-xl mb-4">
        <QRCodeSVG
          value={url}
          size={200}
          bgColor={'#ffffff'}
          fgColor={'#1A1A2E'}
          level={'Q'}
          includeMargin={false} />
        
      </div>
      <p className="text-center font-medium text-textPrimary">{label}</p>
      <p className="text-xs text-textSecondary mt-2 text-center break-all max-w-[250px]">
        {url}
      </p>
    </div>);

}