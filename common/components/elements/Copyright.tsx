
const Copyright = () => {

  return (
    <div className="font-sora flex flex-wrap items-center justify-center gap-1 text-sm text-neutral-600 dark:text-neutral-400">
      <p>COPYRIGHT ©</p>
      <span>{new Date().getFullYear()}</span>
      <p>Feri Adrian. All rights reserved.</p>
    </div>
  );
};

export default Copyright;
