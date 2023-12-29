import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const TrickQuestions = () => {
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
          <Button variant='default' className='w-2/5'>
            続ける
          </Button>
          <Button variant='default' className='w-2/5'>
            キャンセル
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TrickQuestions;
