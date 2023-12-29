import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui//label';
import { CheckboxWithText } from '@/components/ui/CheckboxWithText';

const OptinAndOptout = () => {
  return (
    <Card>
      <CardHeader className='space-y-1'>
        <CardTitle className='text-2xl'>登録フォーム</CardTitle>
      </CardHeader>
      <CardContent className='grid gap-4'>
        <div className='grid gap-2'>
          <Label htmlFor='email'>Eメールアドレス</Label>
          <Input id='email' type='email' placeholder='m@example.com' />
        </div>
        <div className='grid gap-2'>
          <Label htmlFor='telephone'>電話番号</Label>
          <Input id='telephone' type='telephone' />
        </div>
        <div className='grid gap-4'>
          <CheckboxWithText id='opt-out' label='お知らせメールを希望しない' />
          <CheckboxWithText id='opt-in' label='関連商品のメールを希望する' />
        </div>
      </CardContent>
      <CardFooter>
        <Button className='w-full'>確認画面へ進む</Button>
      </CardFooter>
    </Card>
  );
};

export default OptinAndOptout;
