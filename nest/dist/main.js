"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const class_validator_1 = require("class-validator");
const app_module_1 = require("./app.module");
const validation_pipe_1 = require("./pipes/validation.pipe");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: [
            /^(.*)/,
        ],
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        preflightContinue: false,
        optionsSuccessStatus: 200,
        credentials: true,
        allowedHeaders: 'Origin,X-Requested-With,Content-Type,Accept,Authorization,authorization,X-Forwarded-for',
    });
    app.useGlobalPipes(new validation_pipe_1.ValidationPipe());
    (0, class_validator_1.useContainer)(app.select(app_module_1.AppModule), { fallbackOnErrors: true });
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map