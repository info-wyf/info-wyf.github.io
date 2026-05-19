/**
 * 喜娘上上牵 — 环境配置文件（静态部署版）
 * 部署到 GitHub Pages 时使用此配置
 */

const CONFIG = {
    // API 基础地址（阿里云函数计算 URL，部署后填入）
    API_BASE: 'https://xiniang-api-brvwnemkgf.cn-shanghai.fcapp.run',

    // 静态数据地址（相对于 index.html 同目录）
    DATA_URL: 'data.json',

    // 是否启用静态模式（GitHub Pages 上必须为 true）
    STATIC_MODE: true,

    // 管理员 Token 存储 Key
    TOKEN_KEY: 'xiniang_admin_token',

    // 默认每页条数
    PAGE_SIZE: 20,
};
