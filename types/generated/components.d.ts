import type { Schema, Struct } from '@strapi/strapi';

export interface ContentFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_content_faq_items';
  info: {
    displayName: 'faq-item';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentMilestones extends Struct.ComponentSchema {
  collectionName: 'components_content_milestones';
  info: {
    displayName: 'Milestones';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    year: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentStats extends Struct.ComponentSchema {
  collectionName: 'components_content_stats';
  info: {
    displayName: 'Stats';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedDifferencePoint extends Struct.ComponentSchema {
  collectionName: 'components_shared_difference_points';
  info: {
    displayName: 'Difference point';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFounders extends Struct.ComponentSchema {
  collectionName: 'components_shared_founders';
  info: {
    displayName: 'Founders';
  };
  attributes: {
    bio: Schema.Attribute.Text & Schema.Attribute.Required;
    email: Schema.Attribute.String & Schema.Attribute.Required;
    github: Schema.Attribute.String;
    initials: Schema.Attribute.String & Schema.Attribute.Required;
    linkedin: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    profile_photo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    role: Schema.Attribute.String & Schema.Attribute.Required;
    tags: Schema.Attribute.JSON & Schema.Attribute.Required;
    twitter: Schema.Attribute.String;
  };
}

export interface SharedNavigationLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_navigation_links';
  info: {
    displayName: 'Navigation link';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'Social link';
  };
  attributes: {
    platform: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedWorkflowSteps extends Struct.ComponentSchema {
  collectionName: 'components_shared_workflow_steps';
  info: {
    displayName: 'Workflow steps';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    num: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content.faq-item': ContentFaqItem;
      'content.milestones': ContentMilestones;
      'content.stats': ContentStats;
      'shared.difference-point': SharedDifferencePoint;
      'shared.founders': SharedFounders;
      'shared.navigation-link': SharedNavigationLink;
      'shared.social-link': SharedSocialLink;
      'shared.workflow-steps': SharedWorkflowSteps;
    }
  }
}
