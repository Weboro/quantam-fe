'use client';

import ContainerLayout from '@/components/layouts/ContainerLayout';
import React, { useState } from 'react';
import { tabbedData, TabSection } from '@/data/tabbed';

const Tabbed = () => {
	const tabItems = Object.keys(tabbedData);
	const [activeTab, setActiveTab] = useState<string>(tabItems[0]);

	return (
        <ContainerLayout>
		<div className='w-full'>
			
			<div className='flex border-b border-gray-200 mb-6'>
				{tabItems.map((item) => (
					<button
						key={item}
						className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
							activeTab === item
								? 'border-brand-primary text-brand-primary font-semibold'
								: 'border-transparent text-muted hover:text-gray-700 hover:border-gray-300'
						}`}
						onClick={() => setActiveTab(item)}
					>
						{item}
					</button>
				))}
			</div>

			
			<div className=' rounded-lg p-6 bg-surface-2'>
				<div className='space-y-6'>
					<div>
						<h2 className='text-2xl font-medium text-brand-primary-black mb-4'>
							{tabbedData[activeTab].title}
						</h2>
						<p className='text-muted leading-relaxed'>
							{tabbedData[activeTab].description}
						</p>
					</div>

					{tabbedData[activeTab].sections.map(
						(section: TabSection, index: number) => (
							<div key={index} className='space-y-3'>
								<h3 className='text-lg font-semibold text-gray-900'>
									{section.title}
								</h3>
								<ul className='space-y-2'>
									{section.items.map((item: string, itemIndex: number) => (
										<li
											key={itemIndex}
											className='flex items-start text-muted'
										>
											<span className='inline-block w-2 h-2 bg-surface-2 rounded-full mt-2 mr-3 flex-shrink-0'></span>
											<span className='leading-relaxed'>{item}</span>
										</li>
									))}
								</ul>
							</div>
						)
					)}
				</div>
			</div>
		</div>

    </ContainerLayout>
    );
};

export default Tabbed;
