import { Spinner } from '@nextui-org/react';

export const Loading = () => {
  return (
    <div className="h-screen md:-mt-16 flex justify-center items-center">
      <Spinner />
    </div>
  );
};
