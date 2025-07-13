import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SocialConnections = () => {
  const socialPlatforms = [
    {
      name: 'LinkedIn',
      handle: '@portfolioverse',
      description: 'Professional updates, industry insights, and networking',
      icon: 'Linkedin',
      url: 'https://linkedin.com/in/portfolioverse',
      followers: '2.5K',
      activity: 'Posted 2 days ago',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      primary: true
    },
    {
      name: 'Dribbble',
      handle: '@portfolioverse',
      description: 'Latest design work, creative experiments, and inspiration',
      icon: 'Dribbble',
      url: 'https://dribbble.com/portfolioverse',
      followers: '1.8K',
      activity: 'New shot yesterday',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50'
    },
    {
      name: 'Behance',
      handle: '@portfolioverse',
      description: 'Complete project case studies and portfolio showcase',
      icon: 'Behance',
      url: 'https://behance.net/portfolioverse',
      followers: '3.2K',
      activity: 'Project featured',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'Twitter',
      handle: '@portfolioverse',
      description: 'Design thoughts, quick tips, and creative community',
      icon: 'Twitter',
      url: 'https://twitter.com/portfolioverse',
      followers: '1.2K',
      activity: 'Active today',
      color: 'text-sky-500',
      bgColor: 'bg-sky-50'
    },
    {
      name: 'Instagram',
      handle: '@portfolioverse.design',
      description: 'Behind-the-scenes, creative process, and inspiration',
      icon: 'Instagram',
      url: 'https://instagram.com/portfolioverse.design',
      followers: '892',
      activity: 'Story 3h ago',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      name: 'GitHub',
      handle: '@portfolioverse',
      description: 'Open source projects, code snippets, and development work',
      icon: 'Github',
      url: 'https://github.com/portfolioverse',
      followers: '456',
      activity: 'Commit yesterday',
      color: 'text-gray-800',
      bgColor: 'bg-gray-50'
    }
  ];

  const recentActivity = [
    {
      platform: 'LinkedIn',
      action: 'Published article',
      content: '"The Future of Design Systems in 2025"',
      time: '2 days ago',
      engagement: '127 likes, 23 comments'
    },
    {
      platform: 'Dribbble',
      action: 'Shared design',
      content: 'Mobile Banking App - Dark Mode Exploration',
      time: '1 day ago',
      engagement: '89 likes, 12 comments'
    },
    {
      platform: 'Twitter',
      action: 'Thread posted',
      content: '5 CSS tricks every designer should know',
      time: '6 hours ago',
      engagement: '45 retweets, 78 likes'
    }
  ];

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-text-primary mb-3">Connect Across Platforms</h3>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Follow my creative journey, get design insights, and join the conversation 
          across different platforms. Each offers unique content and perspectives.
        </p>
      </div>

      {/* Social Platforms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {socialPlatforms.map((platform) => (
          <div
            key={platform.name}
            className={`relative bg-card rounded-xl p-6 border creative-transition cursor-pointer group hover:border-accent/50 hover:creative-shadow ${
              platform.primary ? 'ring-2 ring-accent/20 border-accent' : 'border-border'
            }`}
            onClick={() => handleSocialClick(platform.url)}
          >
            {platform.primary && (
              <div className="absolute -top-3 left-6">
                <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                  Primary
                </span>
              </div>
            )}

            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-lg ${platform.bgColor} group-hover:scale-110 creative-transition`}>
                <Icon name={platform.icon} size={24} className={platform.color} />
              </div>
              <Icon name="ExternalLink" size={16} className="text-text-secondary opacity-0 group-hover:opacity-100 creative-transition" />
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-text-primary mb-1">{platform.name}</h4>
              <p className="text-sm text-accent font-medium mb-2">{platform.handle}</p>
              <p className="text-sm text-text-secondary leading-relaxed">
                {platform.description}
              </p>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-4">
                <span className="text-text-primary font-medium">{platform.followers}</span>
                <span className="text-text-secondary">followers</span>
              </div>
              <span className="text-success text-xs">{platform.activity}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-card rounded-2xl p-8 creative-shadow">
        <h4 className="text-xl font-bold text-text-primary mb-6">Recent Social Activity</h4>
        <div className="space-y-6">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 bg-muted rounded-lg">
              <div className="p-2 bg-accent/10 rounded-lg">
                <Icon name="Activity" size={16} className="text-accent" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="font-medium text-text-primary">{activity.platform}</span>
                  <span className="text-text-secondary">•</span>
                  <span className="text-sm text-text-secondary">{activity.action}</span>
                  <span className="text-text-secondary">•</span>
                  <span className="text-sm text-text-secondary">{activity.time}</span>
                </div>
                <p className="text-text-primary mb-2">{activity.content}</p>
                <p className="text-sm text-success">{activity.engagement}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Button
            variant="outline"
            iconName="Rss"
            iconPosition="left"
            className="creative-transition hover:border-accent hover:text-accent"
          >
            Follow All Updates
          </Button>
        </div>
      </div>

      {/* Communication Preferences */}
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
        <div className="flex items-start space-x-3">
          <Icon name="MessageCircle" size={20} className="text-primary mt-0.5" />
          <div>
            <h4 className="font-semibold text-text-primary mb-2">Social Media Communication</h4>
            <p className="text-sm text-text-secondary leading-relaxed mb-3">
              While I'm active across platforms, for project inquiries and professional discussions, 
              email or LinkedIn direct messages work best. Social platforms are great for creative 
              inspiration, quick questions, and staying connected with the design community.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                Best for: Creative inspiration
              </span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full">
                Response time: 24-48 hours
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialConnections;