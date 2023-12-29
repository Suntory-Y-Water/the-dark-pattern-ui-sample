import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const SneakIntoBasket = () => {
  return (
    <div className='my-4'>
      <Card>
        <CardHeader>
          <CardTitle>ご注文内容の確認</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='space-y-1'>
            <div className='grid grid-cols-2'>
              <p>ザ・ダークパターン</p>
              <p className='text-right'>2,200円</p>
            </div>
            <div className='grid grid-cols-2 border-b pb-2'>
              <p>メッセージカード代</p>
              <p className='text-right'>200円</p>
            </div>
            <div className='grid grid-cols-2 pt-2'>
              <p className='font-bold'>合計(税込み)</p>
              <p className='text-right font-bold'>2,400円</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className='flex justify-center'>
          <Button variant='default' className='w-full'>
            決済に進む
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SneakIntoBasket;
