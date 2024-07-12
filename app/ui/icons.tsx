import Image from 'next/image';
import facebookIcon from '@/public/icons/facebook.svg';
import xIcon from '@/public/icons/x.svg';
import instagramIcon from '@/public/icons/instagram.svg';
import githubIcon from '@/public/icons/github.svg';

export default function Icons() {
  return (
    <div className="flex gap-3">
      <Image src={facebookIcon} alt="Facebook Icon" width="20" />
      <Image src={xIcon} alt="X Icon" width="20" />
      <Image src={instagramIcon} alt="Instagram Icon" width="20" />
      <Image src={githubIcon} alt="Github Icon" width="20" />
    </div>
  );
}

