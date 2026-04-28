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

export interface SharedDifferencePoint extends Struct.ComponentSchema {
  collectionName: 'components_shared_difference_points';
  info: {
    displayName: 'Difference point';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content.faq-item': ContentFaqItem;
      'shared.difference-point': SharedDifferencePoint;
      'shared.navigation-link': SharedNavigationLink;
      'shared.social-link': SharedSocialLink;
    }
  }
}
