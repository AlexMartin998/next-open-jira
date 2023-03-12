import { useRouter } from 'next/router';

export const useNavigateTo = () => {
  const router = useRouter();

  const navigateToPath = (path: string) => {
    setTimeout(() => {
      return router.push(path);
    }, 1800);
  };

  return { navigateToPath };
};
