import { yupResolver } from '@hookform/resolvers/yup';
import { type Dispatch, type SetStateAction } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import Button from '../UI/Button';

const phoneRegExp: RegExp =
  /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

const schema = yup.object({
  name: yup
    .string()
    .min(2, 'The name must contain at least 2 characters.')
    .max(20, 'The name must contain a maximum of 20 characters.')
    .default(''),
  phone: yup
    .string()
    .required('This field is required')
    .matches(phoneRegExp, 'Phone number is not valid'),
  email: yup.string().email('Invalid email').required('This field is required'),
  interestedIn: yup
    .string()
    .max(30, 'The name must contain a maximum of 30 characters.')
    .default(''),
  message: yup.string().required('This field is required'),
});

interface ContactFormProps {
  setIsSended: Dispatch<SetStateAction<boolean>>;
}

type FormData = yup.InferType<typeof schema>;

const ContactForm = ({ setIsSended }: ContactFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    defaultValues: schema.getDefault(),
  });
  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data);
    reset();
    setIsSended(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full '>
      <div className='w-full'>
        <input
          {...register('name')}
          className={`w-full h-11.5 bg-[#F3F3F3] placeholder:text-[#8D8D8D] text-sm py-4 pl-5 ${
            errors.name ? 'border border-red-500' : ''
          }`}
          placeholder='Name'
        />
        {errors.name && (
          <p className='text-sm font-bold text-red-500'>
            {errors.name.message}
          </p>
        )}
      </div>
      <div className='w-full mt-2.5'>
        <input
          {...register('phone')}
          className={`w-full h-11.5 bg-[#F3F3F3] placeholder:text-[#8D8D8D] text-sm py-4 pl-5 ${
            errors.phone ? 'border border-red-500' : ''
          }`}
          placeholder='Phone Number'
        />
        {errors.phone && (
          <p className='text-sm font-bold text-red-500'>
            {errors.phone.message}
          </p>
        )}
      </div>
      <div className='w-full mt-2.5'>
        <input
          {...register('email')}
          className={`w-full h-11.5 bg-[#F3F3F3] placeholder:text-[#8D8D8D] text-sm py-4 pl-5 ${
            errors.email ? 'border border-red-500' : ''
          }`}
          placeholder='E-mail'
        />
        {errors.email && (
          <p className='text-sm font-bold text-red-500'>
            {errors.email.message}
          </p>
        )}
      </div>
      <div className='w-full mt-2.5'>
        <input
          {...register('interestedIn')}
          className={`w-full h-11.5 bg-[#F3F3F3] placeholder:text-[#8D8D8D] text-sm py-4 pl-5 ${
            errors.interestedIn ? 'border border-red-500' : ''
          }`}
          placeholder='Interested In'
        />
        {errors.interestedIn && (
          <p className='text-sm font-bold text-red-500'>
            {errors.interestedIn.message}
          </p>
        )}
      </div>
      <div className='w-full mt-2.5'>
        <textarea
          rows={7}
          {...register('message')}
          className={`w-full bg-[#F3F3F3] placeholder:text-[#8D8D8D] text-sm py-4 pl-5 resize-none ${
            errors.message ? 'border border-red-500' : ''
          }`}
          placeholder='Message'
        />
        {errors.message && (
          <p className='text-sm font-bold text-red-500'>
            {errors.message.message}
          </p>
        )}
      </div>
      <Button
        type='submit'
        text='Send'
        className='uppercase bg-[#333333] text-white transition-colors duration-300 border-[#333333] hover:border-2 hover:bg-transparent hover:text-black mt-5'
      />
    </form>
  );
};

export default ContactForm;
