CREATE TABLE `vitehub_form_submissions` (
	`id` text PRIMARY KEY,
	`form` text NOT NULL,
	`data` text NOT NULL,
	`page` text,
	`anchor` text,
	`user` text,
	`status` text NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `vitehub_form_submissions_form` ON `vitehub_form_submissions` (`form`,`created_at`);--> statement-breakpoint
CREATE INDEX `vitehub_form_submissions_status` ON `vitehub_form_submissions` (`status`,`created_at`);