# Logger

Logger is essential part of development/production process that provides developers a tool to debug/error/trace the bugs and go thru the logs.

### Rule of Log:

- Donot put in sensitive info like passwords, API keys, or personal user data in the log. Logging sensitive information can lead to data breaches and violations of privacy regulations since it can be accessed by developers, support staff etc.

### Code

- Contains a simple toy logger written in nodejs (without any external library) and uses factory design pattern.
- can be extended to add more features like log rotation which involves archiving and compressing old log files to save disk space and improve performance. Log files can also be split according to size, date, or service, which can help with organization and searching.

There are lot of prod-grade logger like winscon, pino in nodejs for logging, zap in go etc. And external services like datadog, sentry that provide centralized log management, monitoring, and alerting capabilities etc
