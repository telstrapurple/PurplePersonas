import { promises as fs } from 'fs';
import { join } from 'path';
import { MarkdownMetadata, process } from '$lib/markdown';
import type { RequestHandler } from '@sveltejs/kit';

const roleFileDir = 'src/roles';

export interface RoleDefinition {
	metadata: MarkdownMetadata;
	slug: string;
}

export const get: RequestHandler<RoleDefinition[]> = async () => {
	const roleFiles = await fs.readdir(roleFileDir);

	const roles = await Promise.all(
		roleFiles
			.filter((fileName) => /.+\.md$/.test(fileName))
			.map(async (fileName) => {
				const fileContents = await fs.readFile(join(roleFileDir, fileName), { encoding: 'utf8' });

				const { metadata } = await process(fileContents);
				return {
					metadata,
					slug: fileName.replace(/\.md$/, '')
				};
			})
	);

	// TODO: Add metadata to sort by order
	roles.sort((a, b) => a.metadata.sortorder - b.metadata.sortorder);

	const body = JSON.stringify(roles);

	return { body };
};
