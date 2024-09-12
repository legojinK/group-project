const path = require('path');

// 절대 경로 설정
module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@model': path.resolve(__dirname, 'src/model'),
            '@api': path.resolve(__dirname, 'src/api'),
            '@store': path.resolve(__dirname, 'src/store'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@containers': path.resolve(__dirname, 'src/containers'),
        },
    },
};
