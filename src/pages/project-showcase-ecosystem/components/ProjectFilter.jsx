import React from 'react';

import Button from '../../../components/ui/Button';

const ProjectFilter = ({ 
  categories, 
  technologies, 
  selectedCategory, 
  selectedTechnology, 
  onCategoryChange, 
  onTechnologyChange,
  onClearFilters,
  projectCount 
}) => {
  const hasActiveFilters = selectedCategory !== 'all' || selectedTechnology !== 'all';

  return (
    <div className="bg-card rounded-xl p-6 shadow-creative border border-border">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          {/* Category Filter */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-text-primary">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="w-full sm:w-48 px-3 py-2 border border-border rounded-lg bg-input text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
            >
              <option value="all">All Categories</option>
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label} ({category.count})
                </option>
              ))}
            </select>
          </div>

          {/* Technology Filter */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-text-primary">Technology</label>
            <select
              value={selectedTechnology}
              onChange={(e) => onTechnologyChange(e.target.value)}
              className="w-full sm:w-48 px-3 py-2 border border-border rounded-lg bg-input text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
            >
              <option value="all">All Technologies</option>
              {technologies.map((tech) => (
                <option key={tech.value} value={tech.value}>
                  {tech.label} ({tech.count})
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-sm text-text-secondary">
            {projectCount} project{projectCount !== 1 ? 's' : ''} found
          </div>
          
          {hasActiveFilters && (
            <Button
              variant="outline"
              size="sm"
              iconName="X"
              iconPosition="left"
              onClick={onClearFilters}
              className="hover:bg-destructive/10 hover:text-destructive hover:border-destructive/30"
            >
              Clear Filters
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectFilter;