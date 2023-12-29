import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const TrickQuestionsSample = () => {
  return (
    <div className='my-4'>
      <Card>
        <CardHeader>
          <CardTitle>月額プレミアム会員のキャンセル</CardTitle>
        </CardHeader>
        <CardContent>
          <p>このまま進むと、月額プレミアム会員の資格を失いますがよろしいですか？</p>
        </CardContent>
        <CardFooter className='flex justify-between'>
          <Button variant='secondary' className='w-2/5'>
            キャンセルしない
          </Button>
          <Button variant='default' className='w-2/5'>
            続ける
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TrickQuestionsSample;
