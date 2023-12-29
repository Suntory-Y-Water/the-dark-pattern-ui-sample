import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface HiddenCostsProps {
  title: string;
  price: number;
}

const HiddenCosts = () => {
  const items: HiddenCostsProps[] = [
    {
      title: 'チケット代',
      price: 4900,
    },
    {
      title: 'システム利用料',
      price: 220,
    },
    {
      title: '発行手数料',
      price: 110,
    },
    {
      title: '決済手数料',
      price: 250,
    },
    {
      title: '特別販売利用料',
      price: 980,
    },
  ];

  // 合計金額を計算
  const totalPrice = items.reduce((total, item) => total + item.price, 0);

  // 金額をカンマ区切り形式にフォーマット
  const formattedTotalPrice = new Intl.NumberFormat('ja-JP').format(totalPrice);

  return (
    <div className='my-4'>
      <Card>
        <CardHeader>
          <CardTitle>最終確認</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='space-y-1'>
            {items.map((item) => (
              <div className='grid grid-cols-2' key={item.title}>
                <p>{item.title}</p>
                <p className='text-right'>{new Intl.NumberFormat('ja-JP').format(item.price)}円</p>
              </div>
            ))}
            <div className='grid grid-cols-2 pt-4 border-t'>
              <p className='font-bold'>合計(税込み)</p>
              <p className='text-right font-bold'>{formattedTotalPrice}円</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className='flex justify-center'>
          <Button variant='default' className='w-full'>
            予約を確定する
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default HiddenCosts;
