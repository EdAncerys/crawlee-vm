# Web Scraping Application

This project is a web scraping application built with Node.js, using Express for the server framework and Crawlee for efficient data extraction. The application utilizes BullMQ for job queuing and PM2 for process management, ensuring reliable and scalable scraping operations.

## Features

- **Express**: Lightweight web framework for building APIs.
- **Crawlee**: Powerful web scraping library for extracting data from websites.
- **BullMQ**: Redis-based queue for managing background jobs and tasks.
- **Playwright**: Browser automation library for headless scraping.
- **dotenv**: Loads environment variables from a `.env` file for secure configuration.
- **PM2**: Process manager for keeping applications alive and managing logs.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

## Usage

Send requests to the Express API to trigger scraping jobs, which will run in the background and store results as specified.

## Contributing

Feel free to submit issues or pull requests for improvements or features.

## Digital ocean firewall configuration

Enable the Firewall. First, you need to enable the firewall to make the rules active:

```bash
sudo ufw enable
```

## Allow Port 8080

Once ufw is enabled, you can re-apply the rule to allow traffic on port 8080:

```bash
sudo ufw allow 8080/tcp
```

## Check the Firewall Status

After allowing the port, check the status of ufw to verify that the rules are correctly applied:

```bash
sudo ufw status
```
