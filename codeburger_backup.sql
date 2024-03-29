failed to get console mode for stdout: Identificador inv├ílido.
--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2 (Debian 16.2-1.pgdg120+2)
-- Dumped by pg_dump version 16.2 (Debian 16.2-1.pgdg120+2)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO postgres;

--
-- Name: categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    path character varying(255)
);


ALTER TABLE public.categories OWNER TO postgres;

--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.categories_id_seq OWNER TO postgres;

--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    price integer NOT NULL,
    path character varying(255) NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    category_id integer,
    offer boolean DEFAULT false NOT NULL
);


ALTER TABLE public.products OWNER TO postgres;

--
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.products_id_seq OWNER TO postgres;

--
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id uuid NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password_hash character varying(255) NOT NULL,
    admin boolean DEFAULT false NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- Name: products id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."SequelizeMeta" (name) FROM stdin;
20240215231150-create-users.js
20240217180623-create-products.js
20240224185418-create-categories.js
20240224211823-delete-category-column.js
20240224212350-create-category-column.js
20240225025555-create-products-offer-column.js
20240225033516-create-category-column.js
\.


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categories (id, name, created_at, updated_at, path) FROM stdin;
12	Hamburgueres	2024-02-25 20:37:24.729+00	2024-02-25 20:37:24.729+00	a93004db-9cbb-4013-b0f3-0eaa10469a31.jpg
13	Bebidas	2024-02-25 20:37:43.499+00	2024-02-25 20:37:43.499+00	613e2b27-8d2e-46b0-bd03-5e1d97c1fab8.png
14	Sobremesas	2024-02-25 20:37:56.992+00	2024-02-25 20:37:56.992+00	3236a700-b566-4ac5-b116-5d8138ad0d07.jpg
15	Entradas	2024-02-25 20:38:08.408+00	2024-02-25 20:38:08.408+00	cb655238-0589-4ec5-8210-f63d2b3b5704.jpg
16	Outros	2024-02-25 20:50:47.958+00	2024-02-25 20:50:47.958+00	f7c30751-702c-4811-a357-6fdcf20a5fb9.jpg
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products (id, name, price, path, created_at, updated_at, category_id, offer) FROM stdin;
1	Boi	200	1119676b-1967-4b72-a604-ec617543abe1.png	2024-02-17 19:36:52.371+00	2024-02-25 03:32:25.948+00	\N	f
2	Porco	108	afaae456-616a-4f1e-b942-ddb1c271aee4.png	2024-02-17 19:52:21.051+00	2024-02-17 19:52:21.051+00	12	t
7	Porco inteiro	1000	e1666c38-2c75-4431-af2e-e0fbe1b5545f.png	2024-02-24 21:48:55.339+00	2024-02-24 21:48:55.339+00	16	f
9	Porco inteiro	1000	b215ed2b-266c-403f-af8a-38cf3fd109a0.png	2024-03-02 16:50:18.062+00	2024-03-02 16:50:18.062+00	15	f
10	Porco inteiro	1000	1edf53cc-0f26-400b-9fd4-021f0e6b9e35.png	2024-03-02 16:50:20.08+00	2024-03-02 16:50:20.08+00	15	f
11	Porco inteiro	1000	570b3098-c943-4450-bf69-209c3cd5ca78.png	2024-03-02 16:50:21.615+00	2024-03-02 16:50:21.615+00	15	f
12	Porco inteiro	1000	6528fdeb-6abb-40ae-ab7c-755730b3db4f.png	2024-03-02 16:50:22.908+00	2024-03-02 16:50:22.908+00	15	f
13	Porco inteiro	1000	b06fdb53-6c17-407d-a802-becf1f0e6e7e.png	2024-03-02 16:50:24.377+00	2024-03-02 16:50:24.377+00	15	f
14	Porco inteiro	1000	86dc2be0-bbef-4dd1-b619-a86be955152c.png	2024-03-02 16:50:26.549+00	2024-03-02 16:50:26.549+00	15	f
15	Porco inteiro	1000	73646b9a-c38d-46ef-a3d0-28ae324e881c.png	2024-03-02 16:50:26.609+00	2024-03-02 16:50:26.609+00	15	f
16	Porco inteiro	1000	912f3cba-5821-4549-8c4f-ac9f5acb81ca.png	2024-03-02 16:50:26.667+00	2024-03-02 16:50:26.667+00	15	f
17	Porco inteiro	1000	7f5e39a7-69dc-49f0-8738-98b6833bb47d.png	2024-03-02 16:50:26.67+00	2024-03-02 16:50:26.67+00	15	f
18	Porco inteiro	1000	b889822c-2b7b-4e85-8536-74ea434c0e79.png	2024-03-02 16:50:26.672+00	2024-03-02 16:50:26.672+00	15	f
19	Porco inteiro	1000	342ca707-29ba-4973-9c70-d7571f4219b6.png	2024-03-02 16:50:26.714+00	2024-03-02 16:50:26.714+00	15	f
20	Porco inteiro	1000	5fe8f553-f46b-474c-8765-fe86c6a13a03.png	2024-03-02 16:50:26.773+00	2024-03-02 16:50:26.773+00	15	f
21	Porco inteiro	1000	8ff73f23-f11a-4139-8e5a-bcc7af7bce5d.png	2024-03-02 16:50:26.782+00	2024-03-02 16:50:26.782+00	15	f
22	Porco inteiro	1000	d68f3c8b-6686-4301-90aa-a85b40a502d9.png	2024-03-02 16:50:26.78+00	2024-03-02 16:50:26.78+00	15	f
23	Porco inteiro	1000	e8210f1e-2ed6-432d-b42b-32a755654ab1.png	2024-03-02 16:50:27.054+00	2024-03-02 16:50:27.054+00	15	f
24	Porco inteiro	1000	9edf5b9b-7e3c-4afc-9fb4-ea1447794172.png	2024-03-02 16:50:27.233+00	2024-03-02 16:50:27.233+00	15	f
25	Porco inteiro	1000	871cd7ae-b4ec-4581-bc0b-290009b043da.png	2024-03-02 16:50:27.338+00	2024-03-02 16:50:27.338+00	15	f
26	Porco inteiro	1000	6d99f410-81d7-41f9-8ec2-3d49e177d413.png	2024-03-02 16:50:27.394+00	2024-03-02 16:50:27.394+00	15	f
27	Porco inteiro	1000	7255d165-c63d-4d9a-9538-e3ed6f505c4f.png	2024-03-02 16:50:27.397+00	2024-03-02 16:50:27.397+00	15	f
28	Porco inteiro	1000	2bd4c392-ab2b-4c09-a625-f3eaf29cb665.png	2024-03-02 16:50:27.409+00	2024-03-02 16:50:27.409+00	15	f
29	Porco inteiro	1000	22c8b460-0842-4e0c-9019-e4dfcf2ba57c.png	2024-03-02 16:50:27.414+00	2024-03-02 16:50:27.414+00	15	f
30	Porco inteiro	1000	94f99399-8a7d-486b-bc77-5d4c917c9fbb.png	2024-03-02 16:50:28.176+00	2024-03-02 16:50:28.176+00	15	f
31	Porco inteiro	1000	c1fca062-b819-40bf-b79b-de089cde6fc7.png	2024-03-02 16:50:28.178+00	2024-03-02 16:50:28.178+00	15	f
32	Porco inteiro	1000	75c76cf5-f5e3-4e71-b9db-31e354bce2de.png	2024-03-02 16:50:28.186+00	2024-03-02 16:50:28.186+00	15	f
33	Porco inteiro	1000	dc89e964-f426-4a9b-8a5c-2f8eb2abe3c8.png	2024-03-02 16:50:28.188+00	2024-03-02 16:50:28.188+00	15	f
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, email, password_hash, admin, created_at, updated_at) FROM stdin;
a2ddbff4-5581-45d5-b6d3-29cd27b714f8	Carine	carideoliveira1@gmail.com	$2b$10$kaY0x/Abjj3zk/gqbPtD/uKg/lTKslpivgHDsK5k36l2yOcMwcb0.	f	2024-02-27 03:12:02.139+00	2024-02-27 03:12:02.139+00
0ded2e5e-334a-4f01-870f-30cf31a2ab77	Ademir ADM	ademir1de1oliveira@gmail.com	$2b$10$PJxIijaSXphDBIAoe53c5uyOHmiliJNrtu5LqryVynAYATjdAW9J2	t	2024-02-29 23:29:30.676+00	2024-02-29 23:29:30.676+00
\.


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.categories_id_seq', 16, true);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_id_seq', 33, true);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: categories categories_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_name_key UNIQUE (name);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: products products_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.categories(id) ON UPDATE CASCADE;


--
-- PostgreSQL database dump complete
--

