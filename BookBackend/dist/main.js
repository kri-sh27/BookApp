"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const aws_sdk_1 = require("aws-sdk");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    aws_sdk_1.config.update({
        accessKeyId: 'AKIAVL5LKHEDSSBFVB4Z',
        secretAccessKey: "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",
        region: "ap-south-1",
    });
    await app.listen(80);
}
bootstrap();
//# sourceMappingURL=main.js.map