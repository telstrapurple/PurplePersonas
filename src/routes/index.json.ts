import { promises as fs } from 'fs';
import { join } from 'path';
import { MarkdownMetadata, process } from '$lib/markdown';
import type { RequestHandler } from '@sveltejs/kit';

const portfolioFileDir = 'src/portfolios';

export interface PortfolioDefinition {
	metadata: MarkdownMetadata;
	slug: string;
}

export const get: RequestHandler<PortfolioDefinition[]> = async () => {
	const portfolioFiles = await fs.readdir(portfolioFileDir);

	const portfolios = await Promise.all(
		portfolioFiles
			.filter((fileName) => /.+\.md$/.test(fileName))
			.map(async (fileName) => {
				const fileContents = await fs.readFile(join(portfolioFileDir, fileName), {
					encoding: 'utf8'
				});

				const { metadata } = await process(fileContents);
				return {
					metadata,
					slug: fileName.replace(/\.md$/, '')
				};
			})
	);

	portfolios.sort((a, b) => a.metadata.sortorder - b.metadata.sortorder);

	const body = JSON.stringify(portfolios);

	return { body };
};
