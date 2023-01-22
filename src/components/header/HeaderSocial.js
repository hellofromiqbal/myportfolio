import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';

const HeaderSocial = () => {
  return (
    <div className="header__social">
      <a href="https://linkedin.com"><BsLinkedin/></a>
      <a href="https://github.com"><FaGithub/></a>
      <a href="https://instagram.com"><GrInstagram/></a>
    </div>
  );
}
 
export default HeaderSocial;