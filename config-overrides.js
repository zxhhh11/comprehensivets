

// const tsImportPluginFactory = require('ts-import-plugin')
// const { getLoader } = require("react-app-rewired");
// const rewireLess = require('react-app-rewire-less');

// module.exports = function override(config, env) {
//     const tsLoader = getLoader(
//         config.module.rules,
//         rule =>
//             rule.loader &&
//             typeof rule.loader === 'string' &&
//             rule.loader.includes('ts-loader')
//     );

//     tsLoader.options = {
//         getCustomTransformers: () => ({
//             before: [ tsImportPluginFactory({
//                 libraryDirectory: 'es',
//                 libraryName: 'antd',
//                 style: true,
//             }) ]
//         })
//     };

//     config = rewireLess.withLoaderOptions({
//         javascriptEnabled: true,
//         modifyVars: {
//             "@primary-color": "#1DA57A", // 主题色
//         },
//     })(config, env);

//     return config;
// };


const { override, fixBabelImports, addLessLoader } = require('customize-cra');

// 取消生成map 文件
process.env.GENERATE_SOURCEMAP = 'false';
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    // 此处可以定义全局用的公共less 变量 定义完切记重改项目
    modifyVars: { '@primary-color': '#1DA57A', '@error-color': '#f5222d', '@white-back': 'red' }
  })
);
