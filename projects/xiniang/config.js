/**
 * 喜娘上上牵 — 环境配置文件（静态部署版）
 * 部署到 GitHub Pages 时使用此配置
 */

const CONFIG = {
    // 是否使用 API 模式（false = 静态模式，从 data.json 加载）
    // 注意：查询始终使用静态模式，此配置仅用于标记是否需要 API 调用（增删改）
    USE_API: false,

    // API 基础地址（阿里云函数计算 URL，部署后填入）
    API_BASE: 'https://xiniang-api-brvwnemkgf.cn-shanghai.fcapp.run',

    // 静态数据地址（相对于 index.html 同目录）
    DATA_URL: 'data.json',

    // 地区数据地址（相对于 index.html 同目录）
    REGIONS_URL: 'regions.json',

    // 管理员 Token 存储 Key
    TOKEN_KEY: 'xiniang_admin_token',

    // 默认每页条数
    PAGE_SIZE: 20,

    // 前端版本号（用于清除浏览器缓存）
    VERSION: 'v34',
};
