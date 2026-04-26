# Yifan Wang (Info-wyf) - Personal Website

> 个人学术与技术展示站点，基于 GitHub Pages 构建

## 📂 项目结构

```
info-wyf.github.io/
├── index.html                  # 主页（个人简介、项目轮播）
├── cv.html / cv.css            # 简历页面
├── projects.html               # 项目导航页（分类筛选）
├── styles.css / style_index.css # 全局样式 / 首页样式
├── scripts.js                  # 全局脚本
│
├── images/                     # 公共资源图片
│   ├── YifanWang.jpg
│   ├── YifanWang1.jpg
│   ├── favicon.ico
│   └── logo.png
│
├── bhs_tech_knowledge_map/     # 🗺️ Curriculum - BHS 科技知识地图
│   ├── 9dgt_certificate_web.html      # 9DGT 证书生成器
│   ├── adventure_map_manager.html     # 冒险地图管理器
│   ├── knowledge-graph.html           # 知识图谱
│   ├── knowledge_map_dashboard.html   # 知识地图仪表盘
│   ├── nodes.json                     # 知识节点数据
│   ├── curriculum/                    # 课程地图
│   │   ├── JuniorY9Y10/
│   │   │   ├── 9dgt_adventure_map.html
│   │   │   └── 10dgt_adventure_map.html
│   │   └── Year11/
│   │       └── 11dtp_adventure_map.html
│   └── images/                        # 知识地图相关图片
│
├── teaching/                   # 🏅 Student Exp - 教学项目
│   ├── project_y9_electronics.html    # Y9 电子学项目
│   ├── project_y10_bluetooth.html     # Y10 蓝牙项目
│   ├── project_y11_digital.html       # Y11 数字技课
│   ├── project_y12_programming.html   # Y12 编程课
│   ├── project_y13_programming.html   # Y13 编程课
│   ├── teaching_feedback.html         # 教学反馈
│   ├── teachers_feedback.html         # 教师反馈
│   ├── web-arch-animation.html        # Web 架构动画
│   ├── images/                        # 教学图片资源
│   └── images2/                       # 反馈图表资源
│
├── schools_map/                # 🌐 Web Tools - 学校地图
│   └── index.html
│
├── budget/                     # 🌐 Web Tools - 预算工具
│   └── index.html
│
├── projects/                   # 项目归档目录
│   └── archive/               # 原型项目归档（不展示）
│
├── memory/                     # 归档：记忆文件（不展示）
│
├── _config.yml                 # Jekyll 配置文件
└── CNAME                       # 自定义域名配置
```

## 🎯 项目分类

| 分类 | 描述 | 包含项目 |
|------|------|----------|
| 🎓 **Classroom** | 课堂工具与地图 | BHS 科技知识地图、课程冒险地图 |
| 🗺️ **Curriculum** | 课程设计与结构 | Y9-Y13 各年级课程项目、知识图谱 |
| 🏅 **Student Exp** | 学生体验相关 | 教学反馈、项目展示、互动工具 |
| 🌐 **Web Tools** | 在线工具 | 学校地图、预算计算器、证书生成器 |

> **Prototypes 归档**：IoT 原型、Shumo 早期项目等已移至 `projects/archive/`，不在项目页展示。

## 🛠️ 技术栈

- **前端**：HTML5 / CSS3 / JavaScript (Vanilla)
- **字体**：Fraunces (Display) + Manrope (Body)
- **部署**：GitHub Pages + Jekyll
- **特色功能**：
  - 响应式设计，移动端适配
  - 项目分类筛选与轮播展示
  - 深色/浅色主题切换（证书生成器）
  - Canvas 动态渲染（证书导出）

## 📝 本地预览

```bash
# 使用 Python 启动本地服务器（证书导出功能需要 HTTP 环境）
cd /path/to/info-wyf.github.io
python3 -m http.server 9901
# 访问 http://127.0.0.1:9901
```

## 📮 联系方式

- **GitHub**：[@info-wyf](https://github.com/info-wyf)
- **Site**：[info-wyf.github.io](https://info-wyf.github.io)

---

*Last updated: 2026-04-26*
