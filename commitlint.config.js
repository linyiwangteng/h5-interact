module.exports = {
  /***
   * extends字段表示扩展子@commitlint/config-conventional的配置。
   * 一般扩展这个就足够了，这是利用的commitlint的配置宽展机制，可以继承其* 他人的配置。
   * */
  extends: ['@commitlint/config-conventional'],  
  rules: {
    'type-enum': [
        2,
        'always',
        [
        'feat', // 新功能（feature）
        'fix', // 修补bug
        'docs', // 文档（documentation）
        'style', // 格式（不影响代码运行的变动）
        'refactor', // 重构（即不是新增功能，也不是修改bug的代码变动）
        'test', // 增加测试
        'revert', // 回滚
        'config', // 构建过程或辅助工具的变动
        'chore', // 其他改动
        ],
    ],
    'type-empty': [2, 'never'], // 提交不符合规范时,也可以提交,但是会有警告
    'subject-empty': [2, 'never'], // 提交不符合规范时,也可以提交,但是会有警告
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
  }
}