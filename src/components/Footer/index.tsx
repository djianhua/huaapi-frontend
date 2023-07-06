import {BookFilled, GithubOutlined} from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
const Footer: React.FC = () => {
  const defaultMessage = 'Doghua出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Hua API',
          title: 'Hua API',
          href: '',
          // blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/JianHuaDeng',
          blankTarget: true,
        },
        {
          key: 'blob',
          title: <BookFilled />,
          href: 'https://dogbin.vip',
          blankTarget: true,
        },
        {
          key: 'Hua API',
          title: 'Hua API',
          href: '',
          // blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
